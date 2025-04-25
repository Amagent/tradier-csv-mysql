import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  /*
  const fechita = new Date();
  const newUser = await prisma.user.create({    
    data: {
      name: "Lucas",
      email: fechita.toString(),
      password: "123456",
    },
  });
  console.log(newUser);

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });
  console.log(allUsers);

  const updatedUser = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: "Lucas",
      email: "Lucas",
    },
  });
  console.log(updatedUser);
  */
  /*
  const deletedUser = await prisma.user.delete({
    where: {
      id: 1,
    },
  });
  console.log(deletedUser);
  */

  const users = await prisma.user.findMany();

  // console.log(users);

  users.map((user) => {
    console.log(user.id + ' - ' + user.name + ' - ' + user.email);
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
