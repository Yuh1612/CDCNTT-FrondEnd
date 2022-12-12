import apiConfig from "./ApiConfig";

const api = {
  async getRaitings(teacherId) {
    return await apiConfig.get("/raitings", teacherId);
  },
  async createRaiting(teacherId, studentId, raiting, comment) {
    return await apiConfig.post("/raitings", {
      id_Teacher: teacherId,
      id_Student: studentId,
      raiting: raiting,
      comment: comment,
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
      photo: photo,
      phone: phone,
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
};

export default api;
