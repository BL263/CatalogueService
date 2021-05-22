import commentModel from "../model/comment.js";


commentModel.CommentTC.addResolver({
  name: "create",
  kind: "mutation",
  type: commentModel.CommentTC.getResolver("createOne").getType(),
  args: commentModel.CommentTC.getResolver("createOne").getArgs(),
  resolve: async ({ source, args, context, info }) => {
    const comment = await Comment.create(args.record);

    return {
      record: comment,
      recordId: commentModel.CommentTC.getRecordIdFn()(comment),
    };
  },
});

const CommentQuery = {
  commentById: commentModel.CommentTC.getResolver("findById"),
  commentByIds: commentModel.CommentTC.getResolver("findByIds"),
  commentOne: commentModel.CommentTC.getResolver("findOne"),
  commentMany: commentModel.CommentTC.getResolver("findMany"),
  commentCount: commentModel.CommentTC.getResolver("count"),
  commentConnection: commentModel.CommentTC.getResolver("connection"),
  commentPagination: commentModel.CommentTC.getResolver("pagination"),
};

const CommentMutation = {
  commentWithFile: commentModel.CommentTC.getResolver("create"),
  commentCreateOne: commentModel.CommentTC.getResolver("createOne"),
  commentCreateMany: commentModel.CommentTC.getResolver("createMany"),
  commentUpdateById: commentModel.CommentTC.getResolver("updateById"),
  commentUpdateOne: commentModel.CommentTC.getResolver("updateOne"),
  commentUpdateMany: commentModel.CommentTC.getResolver("updateMany"),
  commentRemoveById: commentModel.CommentTC.getResolver("removeById"),
  commentRemoveOne: commentModel.CommentTC.getResolver("removeOne"),
  commentRemoveMany: commentModel.CommentTC.getResolver("removeMany"),
};

export default  { CommentQuery: CommentQuery, CommentMutation: CommentMutation };
