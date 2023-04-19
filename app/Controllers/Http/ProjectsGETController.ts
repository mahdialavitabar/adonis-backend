// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";

export default class ProjectsController {
  public async projects({ view }) {
    const projects = await Database.from("projects").select("*");
    return view.render("projects", { projects });
  }
}
