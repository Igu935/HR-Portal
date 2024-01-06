import Card from "./UI/Card";

export default function NoSelectedUser(){
    return (
        <Card classes="mx-4 py-4">
            <h2 className="text-3xl p-4">No user selected</h2>
            <p className="p-4">Click on the view button or in the add button to add a new user</p>
        </Card>
    )
};