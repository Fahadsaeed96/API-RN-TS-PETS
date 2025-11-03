import { api } from "./index";

export const getPets = async () => {
  const response = await api.get("pets");
  return response.data;
};

export const getPetById = async (id: string) => {
  const response = await api.get(`pets/${id}`);
  return response.data;
};

export const createPet = async (
  name: string,
  type: string,
  image: string,
  adopted: string
) => {
  const response = await api.post("pets", {
    name,
    type,
    image,
    adopted,
  });
  return response.data;
};
export const deletePet = async (id: string) => {
  const response = await api.delete(`pets/${id}`);
  return response.data;
};
