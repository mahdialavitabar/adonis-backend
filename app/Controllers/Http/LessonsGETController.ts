// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Database from "@ioc:Adonis/Lucid/Database";

export default class LessonsController {
  public async lessons() {
    const lessons = await Database.from("lessons").select("*");
    return lessons;
  }
}
