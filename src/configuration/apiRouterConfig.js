"use strict";

import cors                         from "cors";
import indexRouter                  from "../routes/index-route";
import userRouter                   from "../routes/user-route";
import groupRouter                  from "../routes/group-route";

export default function ConfigApiRoutes(app) {
    app.use(cors());
    app.use("/", indexRouter);
    app.use("/api/user", userRouter);
    app.use("/api/group", groupRouter);
}
