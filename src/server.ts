import "dotenv/config";
import app from "./app.js";
import prisma from "./config/db.js";
const PORT = process.env.PORT || 8001;

async function runServer() {
  try {
    await prisma.$connect();
    console.log("✅ PostgreSQL connected");

    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

runServer();
