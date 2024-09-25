export default function Header({children, styles}) {
    return (
        <header className={`text-center text-white mb-5 font-prompt font-semibold text-4xl ${styles}`}>{children}</header>
    )
}