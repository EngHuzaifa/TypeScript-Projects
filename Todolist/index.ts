import inquirer from "inquirer";

// Initialize an empty array to store todos
let todos: string[] = [];
let continueLoop = true;

async function main() {
    while (continueLoop) {
        try {
            // Prompt user for todo item and if they want to add more
            const answers: { todoItem: string; addMore: boolean } = await inquirer.prompt([
                {
                    type: "input",
                    name: "todoItem",
                    message: "What do you want to add to your todo list? ",
                },
                {
                    type: "confirm",
                    name: "addMore",
                    message: "Do you want to add more todos? ",
                    default: false,
                },
            ]);

            const { todoItem, addMore } = answers;
            continueLoop = addMore;

            // Validate and add todo item to the list
            if (todoItem.trim()) {
                todos.push(todoItem.trim());
            } else {
                console.log("Please provide a valid input.");
            }
        } catch (error) {
            console.error("An error occurred while adding your todo:", error);
        }
    }

    // Display the todo list
    if (todos.length > 0) {
        console.log("Your Todo List:");
        todos.forEach((todo, index) => {
            console.log(`${index + 1}. ${todo}`);
        });
    } else {
        console.log("No todos found.");
    }
}

// Execute the main function
main();