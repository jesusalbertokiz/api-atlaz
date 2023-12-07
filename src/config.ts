export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  databaseUser: process.env.DATABASE || "mySQL",
  databasePost: process.env.DATABASE || "mySQL",
  databaseComentarios: process.env.DATABASE || "mySQL",
  SECRETJWT: process.env.SECRETJWT || "asqwd",
};
