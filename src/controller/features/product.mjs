import DB from "../../db/db.mjs";

// get All of this month
export const getAll = async () => {
  try {
    const data = await DB.product.findMany();

    return data;
  } catch (error) {
    console.log(error);
    return "error";
  }
};

// create
export const create = async (data) => {
  try {
    await DB.product.create({ data });

    return "created";
  } catch (error) {
    console.log(error);
    return "error";
  }
};

// create
export const update = async (id, data) => {
  try {
    await DB.product.update({ where: { id: Number(id) }, data });

    return "updated";
  } catch (error) {
    console.log(error);
    return "error";
  }
};

// create
export const deleteData = async (id) => {
  try {
    await DB.product.delete({ where: { id: Number(id) } });

    return "deleted";
  } catch (error) {
    console.log(error);
    return "error";
  }
};
