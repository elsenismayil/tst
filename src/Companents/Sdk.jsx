import axios from "axios";

class SDK {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://api.themoviedb.org/4",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MzU5NzU4MzYsImF1ZCI6IjI4NWExMDdmMGM5MmNmZGE0NjdkYjIyMWNjYzUwMmY3IiwianRpIjoiMzY4NzEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxLCJzdWIiOiI1ZjE5ODAyNGE2ZDkzMTAwMzc4NzA1MmYifQ.ZP8HlEcAthUMlIThvRa-keAxFBkIZ24fL1p_jiFWk_U",
      },
      params: {
        api_key: "579fa79d34e501aae2fefaae5e307ee0",
        access_tokken:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzlmYTc5ZDM0ZTUwMWFhZTJmZWZhYWU1ZTMwN2VlMCIsInN1YiI6IjYxZDQ2NWNiNDk3NTYwMDA0MjI0Y2E1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6dvaL-KW6xPsuwh_ud6lCZJf-5gTfCNHF3STbhMoS_w",
      },
    });

    this.ins = axios.create({
      baseURL: "https://api.themoviedb.org/3",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      params: {
        api_key: "579fa79d34e501aae2fefaae5e307ee0",
      },
    });
    this.accountId = "5f198024a6d931003787052f";
  }

  async getListsFromAccount() {
    try {
      const request = await this.instance.get(
        `/account/${this.accountId}/lists`
      );
      const res = request.data;
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async getList(id) {
    try {
      const req = await this.instance.get(`/list/${id}`);
      return req.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPost(id, type) {
    try {
      const req = await this.ins.get(`/${type}/${id}`);
      return req.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getSearch(query, { abortSignal, page = 1 } = {}) {
    const req = await this.instance.get("/search/multi", {
      params: {
        query,
        page,
      },
      signal: abortSignal,
    });
    return req.data;
  }

  async postList(list) {
    try {
      const req = await this.instance.post("/list", list);
      return req.data;
    } catch (error) {
      console.log(error);
    }
  }

  async addItem(id, list) {
    try {
      const req = await this.instance.post(`/list/${id}/items`, list);
      return req.data;
    } catch (error) {
      console.log(error);
    }
  }

  async removeItem(id, data){
    if(window.confirm("Are you sure deleted movie ?")){
      try {
        const req = await this.instance.delete(`/list/${id}/items`, {
          data:data
        });
        return req.data;
      } catch (error) {
        console.log(error);
      }
    }
   
  }

  async editName(id, data){
    try {
      const req= await this.instance.put(`/list/${id}`, data);
      return req.data
    }
    catch (error) {
      console.log(error);
    }
  }
}

export default SDK;
