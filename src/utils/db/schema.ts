import {
  mysqlTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const movies = mysqlTable("movies", {
  movie_id: serial("movie_id").primaryKey(),
  movie_name: varchar("movie_name", { length: 255 }).notNull(),
  movie_description: text("movie_description"),
  movie_poster_url: varchar("movie_poster_url", { length: 255 }),
  des: text("des"),
  created_at: timestamp("created_at").notNull().defaultNow().onUpdateNow(),
});
