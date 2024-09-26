import DB from "../../db/db.mjs";

// get All of this month
export const getAllMonthly = async (page, size) => {
  const offset = (Number(page) - 1) * Number(size);
  const startOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  );
  const endOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  );

  try {
    const data = await DB.invoice.findMany({
      skip: offset,
      take: Number(size),
      orderBy: {
        id: "desc",
      },
      include: {
        Client: {
          select: {
            Name: true,
          },
        },
      },
      where: {
        StartingPoint: false,
        PaymentStatus: "success",
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    });

    const count = await DB.invoice.count({
      where: {
        StartingPoint: false,
        PaymentStatus: "success",
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    });

    return { data, count, page, pageSize: size };
  } catch (error) {
    console.log(error);
    return "error";
  }
};

// get All pos of this month
export const getPOSMonthly = async (page, size) => {
  const offset = (Number(page) - 1) * Number(size);
  const startOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  );
  const endOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  );

  try {
    const data = await DB.invoice.findMany({
      skip: offset,
      take: Number(size),
      orderBy: {
        id: "desc",
      },
      include: {
        Client: {
          select: {
            Name: true,
          },
        },
      },
      where: {
        StartingPoint: false,
        PaymentStatus: "success",
        PaymentMethod: "POS",
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    });

    const count = await DB.invoice.count({
      where: {
        StartingPoint: false,
        PaymentStatus: "success",
        PaymentMethod: "POS",
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    });

    return { data, count, page, pageSize: size };
  } catch (error) {
    console.log(error);
    return "error";
  }
};
// get All Cash of this month
export const getCashMonthly = async (page, size) => {
  const offset = (Number(page) - 1) * Number(size);
  const startOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  );
  const endOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  );

  try {
    const data = await DB.invoice.findMany({
      skip: offset,
      take: Number(size),
      orderBy: {
        id: "desc",
      },
      include: {
        Client: {
          select: {
            Name: true,
          },
        },
      },
      where: {
        StartingPoint: false,
        PaymentStatus: "success",
        PaymentMethod: "Cash",
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    });

    const count = await DB.invoice.count({
      where: {
        StartingPoint: false,
        PaymentStatus: "success",
        PaymentMethod: "Cash",
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    });

    return { data, count, page, pageSize: size };
  } catch (error) {
    console.log(error);
    return "error";
  }
};
// get All bank transfer of this month
export const getBankTransferMonthly = async (page, size) => {
  const offset = (Number(page) - 1) * Number(size);
  const startOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  );
  const endOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  );

  try {
    const data = await DB.invoice.findMany({
      skip: offset,
      take: Number(size),
      orderBy: {
        id: "desc",
      },
      include: {
        Client: {
          select: {
            Name: true,
          },
        },
      },
      where: {
        StartingPoint: false,
        PaymentStatus: "success",
        PaymentMethod: "Bank Transfer",
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    });

    const count = await DB.invoice.count({
      where: {
        StartingPoint: false,
        PaymentStatus: "success",
        PaymentMethod: "Bank Transfer",
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    });

    return { data, count, page, pageSize: size };
  } catch (error) {
    console.log(error);
    return "error";
  }
};

// get All cancel booking of this month
export const getAllCancelBookingMonthly = async (page, size) => {
  const offset = (Number(page) - 1) * Number(size);
  const startOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1
  );
  const endOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  );

  // console.log(startOfMonth, " ", endOfMonth);

  try {
    const data = await DB.booking.findMany({
      skip: offset,
      take: Number(size),
      orderBy: {
        id: "desc",
      },
      include: {
        Client: {
          select: { Name: true },
        },
        Team: {
          select: {
            TeamName: true,
          },
        },
      },
      where: {
        Date: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
        BookingStatus: "cancel",
      },
    });

    const count = await DB.booking.count({
      where: {
        Date: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
        BookingStatus: "cancel",
      },
    });

    return { data, count, page, pageSize: size };
  } catch (error) {
    console.log(error);
    return "error";
  }
};
