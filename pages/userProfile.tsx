import React from "react";
import Head from "next/head";
import EditProfile from "../components/Profile/EditProfile";
import UserPresentation from "../components/Profile/UserPresentation";
import Available from "../components/Profile/Available";
import AboutMe from "../components/Profile/AboutMe";
import SkillsComponent from "../components/Profile/SkillSection/SkillsBox";
import Experience from "../components/Profile/ExperienceSection/ExperienceBox";
import Equipment from "../components/Profile/EquipmentSection/EquipmentBox";
import { useAuth } from "../components/firebase/AuthUserProvider";
import logo from "../public/Logo.svg";
import { User } from "firebase/auth";
import axios from "axios";
import { UserDetail } from "../util/models";
import { ClipLoader } from "react-spinners";

export const DetailContext = React.createContext({
  userData: null as UserDetail,
  setUserData: (newUserData: UserDetail) => { }
});

export default function UserProfile() {
  const { user } = useAuth();

  const [loading, setLoading] = React.useState(true);

  const [userData, setUserData] = React.useState<UserDetail | null>(null);

  const handleChangeUserData = (newUserData: UserDetail) => {
    setUserData(newUserData);
    console.log(userData)
  };

  //get user from id
  React.useEffect(() => {
    setLoading(true);
    if (!user) return;
    console.log(user)

    axios.get(`/api/users/${user?.uid}`).then((res) => {
      console.log(res.data.userDetail)
      setUserData(res.data.userDetail);
      setLoading(false);
    });
  }, [user]);


  const handleUpdate = async (data: UserDetail) => {
    axios.put(`/api/users`, { userDetail: data }).then((res) => {
      console.log('returned: ', res)
    }).catch((err) => {
      console.log(err)
    });
  };

  return (
    <div className="px-8 sm:px-12 md:px-16 lg:px-32 flex flex-row justify-center ">
      <Head>
        <title>Work 2 Do | Profil </title>
      </Head>

      <div className="mt-10 md:mt-20 h-auto 2xl:w-3/5 lg:w-full lg:px-1 min-w-xl">
        {/*User presentation section*/}
        {loading && !userData ?
          <div className='flex flex-col items-center'>
            <ClipLoader
              color={'#8467AA'}
              size={60}
            />
          </div> :
          <DetailContext.Provider value={{ userData: userData, setUserData: handleChangeUserData }}>
            <div className="flex flex-row w-full rounded-2xl mb-10 h-64 shadow-lg mt-32 bg-primary-color">
              <div className="w-1/3 md:w-1/2 flex justify-start md:m-3 p-2">
                <UserPresentation
                  username={user?.displayName}
                  image={user?.photoURL ? user.photoURL : logo}
                  userPosition={loading ? "Laddar..." : "Laddar..."}
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col items-end justify-around text-white p-2">
                <div className="">
                  <EditProfile />
                </div>
                <div className="w-full mr-1">
                  <div className="rounded-2xl bg-profile-available h-full w-full ">
                    <Available startDate="17 maj 2022" endDate="31 aug 2022" />
                  </div>
                </div>
              </div>
            </div>

            {/*About me and skills section*/}
            <div className="md:flex flex-row">
              <div className="bg-profile-sections md:w-1/2 m-2 rounded-2xl shadow-md">
                <AboutMe title="Om mig" />
              </div>
              <div className="bg-profile-sections md:w-1/2 m-2 rounded-2xl shadow-md">
                <SkillsComponent />
              </div>
            </div>
            {/*Experience section*/}
            <div className="bg-profile-sections shadow-md m-2 mt-5 rounded-2xl">
              <Experience />
            </div>
            <div className="bg-profile-sections shadow-md m-2 mt-5 rounded-2xl">
              <Equipment />
            </div>
            <div className="m-auto h-auto w-full flex items-center justify-center mb-20 hover:opacity-80">
              <button className="bg-primary-color p-5 w-40 rounded-md text-center font-bold text-white text-lg" onClick={() => handleUpdate(userData)}>
                Spara
              </button>
            </div>
          </DetailContext.Provider>
        }

      </div>
    </div>
  );
}
