import { api } from "./index";

export const getPets = async () => {
  const response = await api.get("pets");
  return response.data;
};

export const getPetById = async (id: string) => {
  const response = await api.get(`pets/${id}`);
  return response.data;
};
