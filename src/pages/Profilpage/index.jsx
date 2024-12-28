import axios from "axios";
import Navbar from "../../components/Navbar";

const ProfilePage = () => {
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const token = localStorage.getItem("access_Token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get("https://reqres.in/api/users/2", config);
      setUser(response.data);
    } catch {
      console.error("Error fetching user");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src={user.avatar}
          alt="Profile Picture"
          className="w-32 h-32 mb-4 rounded-full"
        />
        <h2 className="text-2xl font-semibold">{user.first_name}</h2>
        <p>{user.email}</p>
      </div>
    </>
  );
};

export default ProfilePage;

