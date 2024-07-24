export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-montserrat font-medium text-sm text-black ` + className}>
            {value ? value : children}
        </label>
    );
}
