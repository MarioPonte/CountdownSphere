interface CountdownInfoProps {
    subtitle: string;
    title: string;
}

const CountdownInfo:React.FC<CountdownInfoProps> = ({
    subtitle,
    title
}) => {
    return (
        <>
            <div className="text-4xl">
                {subtitle}
            </div>
            <div className="text-6xl font-bold">
                {title}
            </div>
        </>
    )
}

export default CountdownInfo;