const mongoose = require("mongoose");
const { app, server } = require("./app");

const port = 3000;

mongoose.connect("mongodb+srv://kalp2002prajapati:SbjvllYj1oo6osxn@cluster0.xfojzlh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to MongoDB!");
        server.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    })
    .catch(err => {
        console.error("Failed to connect to MongoDB:", err);
    });
