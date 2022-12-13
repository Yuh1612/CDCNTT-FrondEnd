import apiConfig from "./ApiConfig";

const api = {
  async getRaitings(teacherId) {
    return await apiConfig.get(`/ratings?teacherId=${teacherId}`);
  },
  async createRaiting(data) {
    return await apiConfig.post("/ratings", {
      data,
    });
  },
  async createTeacher(
    username,
    password,
    firstname,
    lastname,
    photo,
    phone,
    address,
    experience,
    degree,
    certificate
  ) {
    return await apiConfig.post("/teachers", {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      photo: photo,
      address: address,
      experience: experience,
      degree: degree,
      certificate: certificate,
    });
  },
  async createStudent(username, password, firstname, lastname, phone) {
    return await apiConfig.post("/students", {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
    });
  },
  async loginWithTeacher(username, password) {
    return await apiConfig.post("/teachers/login", {
      username: username,
      password: password,
    });
  },
  async loginWithStudent(username, password) {
    return await apiConfig.post("/students/login", {
      username: username,
      password: password,
    });
  },
  async getTeachers() {
    return await apiConfig.get("/teachers");
  },
  async getTeacher(teacherId) {
    return await apiConfig.get(`/teachers/${teacherId}`);
  },
  async searchTeacher(teacherName) {
    return await apiConfig.get(`/search-teachers?name=${teacherName}`);
  },
};

export default api;
