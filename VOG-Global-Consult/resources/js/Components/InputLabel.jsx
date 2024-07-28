export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-montserrat font-semibold text-md md:text-2xl text-black ` + className}>
            {value ? value : children}
        </label>
    );
}
