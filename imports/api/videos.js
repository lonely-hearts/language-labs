const Videos = new Mongo.Collection('videos');

Videos.allow({
    insert: function (userId, doc) {
           return true;
        },
    update: function (userId, doc, fieldNames, modifier) {
           return true;
        },
});

export { Videos };