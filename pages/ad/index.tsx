import React, { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import AdDetails from "../../components/Create-Ad/AdDetails";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useAuth } from "../../components/firebase/AuthUserProvider";
import logo from "../../public/Logo.svg";
import CreateAdForm from "../../components/Create-Ad/CreateAdForm";
import Navbar from "../../components/Navbar/Navbar";
import EditAd from "../../components/Create-Ad/EditAd";
import AdView from "../../components/Create-Ad/AdView";
import { Advertisement } from "../../util/models";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ClipLoader } from "react-spinners";

export default function AdPage() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [selectionIndex, setSelectionIndex] = useState<number>(-1);
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 768) setIsCreating(true);
    setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", () =>
      setIsMobile(window.innerWidth < 768)
    );
  }, []);

  //function that generates the ads in the ad page
  const generateAds = () => {
    return ads.map((ad, index) => {
      return (
        <AdDetails
          key={index}
          image={logo}
          onEdit={() => {
            setSelectionIndex(index);
            setIsEditing(true);
          }}
          onClick={() => {
            setSelectionIndex(index);
            setIsCreating(false);
          }}
          ad={ad}
        />
      );
    });
  };


  useEffect(() => {
    //Fetch first visible page
    if (user) {
      let query = `/api/advertisements/?creatorId=${user.uid}&amount=15`
      //startAt and startAfter parameters can be used for paging if kept track of.
      //When the forwards arrow is pressed the last id fetched can be used with startAfter to fetch the next page
      //and the first id fetched can be stored then used when going back a page with startAt to fetch the previous page
      axios.get(query).then((res) => {
        const ads: Advertisement[] = res.data;
        console.log(res)
        setAds(ads);
        setLoading(false);
      });
    }
  }, [user]);

  useEffect(() => {
    if (loading) console.log("Loading")
    else {
      ads.forEach((ad) => console.log(ad.id));
    }
  }, [loading])

  const chooseRightSide = () => {
    if (isEditing) {
      return (
        <EditAd
          ad={ads[selectionIndex]}
          onSubmit={(ad) => {
            let query = `/api/advertisements/${ad.id}/`;
            axios.put(query, ad).then(() => {
              setAds(ads.map((a) => (a.id === ad.id ? ad : a)));
            });
          }}
          onDelete={(ad) => {
            let query = `/api/advertisements/${ad.id}/`;
            axios.delete(query).then(() => {
              setAds(ads.filter((a) => a.id !== ad.id));
            });
          }}
        />
      );
    } else if (selectionIndex !== -1) {
      return <AdView ad={ads[selectionIndex]} />;
    } else if (isCreating) {
      return (
        <CreateAdForm
          onSubmit={(ad) => {
            const _ad = { ...ad, creatorId: user.uid };
            setAds((prev) => [...prev, _ad]);
            axios.post("/api/advertisements", _ad);
            setIsCreating(false);
            setIsEditing(false);
            if (!isMobile) setSelectionIndex(ads.length - 1);
          }}
        />
      );
    } else {
      return <></>;
    }
  };

  const showLeftSide = () => {
    if (isMobile) {
      return selectionIndex === -1 && !isCreating && !isEditing;
    } else {
      return true;
    }
  };

  const showRightSide = () => {
    return isCreating || isEditing || selectionIndex !== -1 || !isMobile;
  };

  return (
    <>
      <Navbar hideButton />
      <div className="px-8 sm:px-12 md:px-16 lg:px-32">
        <Head>
          <title>Work 2 Do | Mina annons</title>
        </Head>
        <div className="flex flex-row w-full">
          {showLeftSide() && (
            <div className={"flex flex-col w-full lg:w-1/2"}>
              <div className="flex-5 mt-32">
                <p className="font-mulish mb-2 text-3xl font-semibold">
                  Mina annonser
                </p>
                <div className="text-white font-mulish font-semibold text-lg md:mr-5 md:hidden lg:hidden">
                  <div className="bg-primary-color p-1 w-1/2 md:p-2 rounded-md ">
                    <button
                      className="flex flex-row items-center"
                      onClick={() => setIsCreating(true)}
                    >
                      <AddCircleIcon className="w-5 h-5 mr-1" />
                      <p>Skapa annons</p>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex-2">
                  {loading ?
                    <div className='flex flex-col items-center mt-10'>
                      <ClipLoader
                        color={'#8467AA'}
                        size={60}
                      />
                    </div>
                    : ads.length < 1 ? (
                      <p className="font-mulish ">Du har inga annonser!</p>
                    ) : (
                      ads.map((ad, index) => (
                        <AdDetails
                          key={ad.id}
                          image={user?.photoURL ? user.photoURL : logo}
                          onEdit={() => {
                            setIsEditing(true);
                            setSelectionIndex(index);
                          }}
                          ad={ad}
                          onClick={() => {
                            setSelectionIndex(index);
                            setIsEditing(false);
                            //console.log(ads[selectionIndex].period);
                          }}
                        />
                      ))
                    )}
                </div>
              </div>
            </div>
          )}
          {showRightSide() && (
            <div className="w-full mt-44">
              <div
                className="flex justify-start items-start md:hidden"
                onClick={() => {
                  setIsCreating(false);
                  setIsEditing(false);
                  setSelectionIndex(-1);
                }}
              >
                <ArrowBackIcon className="w-7 h-7" />
              </div>
              {chooseRightSide()}
            </div>
          )}
        </div>
      </div>
      {/*<Footer />*/}
    </>
  );
}

AdPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {page} <Footer />
    </>
  );
};
