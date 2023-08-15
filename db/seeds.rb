# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

greetings = Greeting.create( [
    {
        message: "Hello, welcome"
    },
    {
        message: "Good morning"
    },
    {
        message: "Good to see you back"
    },
    {
        message: "welcome back"
    },
    {
        message: "How're you!"
    }
])