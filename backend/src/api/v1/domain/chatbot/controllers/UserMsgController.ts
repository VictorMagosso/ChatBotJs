import mongoose, { Schema } from 'mongoose';
import UserMsg from '../../../../../model/UserMsgModel';

import errors from '../../../../../common/errors/error-helper';

interface UserMsgController {
  _id?: string;
  theme?: string;
  content?:string;
  save?(): UserMsg;
}

interface UserMsgController {
  new(property: UserMsg): UserMsg;
  find(): UserMsg[];
  update(_id: UserMsg, theme: UserMsg, content: UserMsg): UserMsg;
  deleteOne(_id: UserMsg): UserMsg;
}

class UserMsgController {
  public database;

  public usermsgSchema: Schema;

  constructor() {
    this.database = this.database || mongoose.connect("", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  async createUserMsgSchema(): Promise<UserMsgController> {
    const database = await this.database;

    if (this.usermsgSchema) {
      const { UserMsg } = database.models;

      return UserMsg;
    }

    this.usermsgSchema = new database.Schema({
      theme: String,
      content: Boolean,
    });
    database.model('UserMsg', this.usermsgSchema);

    const { UserMsg } = database.models;

    return UserMsg;
  }

  async getUserMsg(): Promise<UserMsg[]> {
    try {
      const UserMsg = await this.createUserMsgSchema();

      const UserMsgs = UserMsg.find();

      return UserMsgs;
    } catch (error) {
      throw errors.generic.notFound();
    }
  }

  async createUserMsg({ theme, content }: UserMsg): Promise<UserMsg> {
    try {
      const UserMsg = await this.createUserMsgSchema();

      const usermsg = new UserMsg({
        theme, 
        content, 
      });

      return usermsg.save();
    } catch {
      throw errors.generic.unprocessableEntity();
    }
  }

  async updateUserMsg({ _id, theme, content }: UserMsg): Promise<UserMsg> {
    try {
      const UserMsg = await this.createUserMsgSchema();

      return UserMsg.update({
        _id
      }, {
        theme
      }, {
        content
      });
    } catch {
      throw errors.generic.unprocessableEntity();
    }
  }

  async deleteUserMsg({ _id }: UserMsg): Promise<UserMsg> {
    try {
      const UserMsg = await this.createUserMsgSchema();

      return UserMsg.deleteOne({
        _id,
      });
    } catch {
      throw errors.generic.unprocessableEntity();
    }
  }
}

export default UserMsgController;
