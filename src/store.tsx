import { makeAutoObservable } from "mobx";

class Profile {
  name: string = "";
  avatar: string = "";

  constructor() {
    makeAutoObservable(this);
    const storedData = localStorage.getItem("profileData");
    if (storedData) {
      const { name, avatar } = JSON.parse(storedData);
      this.login(name, avatar);
    }
  }

  login = (name: string, avatar: string) => {
    this.name = name;
    this.avatar = avatar;
    localStorage.setItem("profileData", JSON.stringify({ name, avatar }));
  };

  logout = () => {
    this.name = "";
    this.avatar = "";
  };
}

const store = new Profile();

export default store;
