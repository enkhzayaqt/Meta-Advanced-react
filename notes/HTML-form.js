// Controlled Inputs
const Form = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form>
            <input
                value={value}
                onChange={handleChange}
                type="text"
            />
        </form>
    )
}

// Every time you type a new character, the handleChange function is executed.
// it receives the new value of the input, and then it sets it in the state.
// therefore, form component always has the input's current value without needing to ask for.
// Another implication is that forms can respond to input changes immediately, for example:
// 1. instant validation per field
// 2. disabling the submit button unless all fields have valid data
// 3. Engorcing a specific input format, like phone number or credit card numbers


// Uncontrolled Inputs:

const Form = () => {
    const inputRef = useref(null);

    const handleSubmit = () => {
        const inputValue = inputRef.current.value;
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text"/>
        </form>
    )
}
