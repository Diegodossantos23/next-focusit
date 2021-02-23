interface ButtonProps {
    color: string;
    children: string;
}

export const Button = (props: ButtonProps) => {
    return (
        <button 
            type="button"
            style={{
                backgroundColor: props.color
            }} >
                {props.children} <strong>0</strong>
        </button>
    )
}

