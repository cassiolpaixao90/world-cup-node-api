"use strict";

import cors                         from "cors";
import indexRouter                  from "../routes/index-route";
import userRouter                   from "../routes/user-route";
import countryRouter                from "../routes/country-route";
import playerRouter                 from "../routes/player-route";
import matchesRouter                from "../routes/matches-route";

export default function ConfigApiRoutes(app) {
    app.use(cors());
    app.use("/", indexRouter);
    app.use("/api/user", userRouter);
    app.use("/api/country", countryRouter);
    app.use("/api/player", playerRouter);
    app.use("/api/matches", matchesRouter);
}
