import { useEffect, useState } from "react"


export function Points(props: { newValue: number; oldValue: number, id: string}) {
    const [score, setScore] = useState(props.oldValue);

    useEffect(() => {
        if (props.newValue !== props.oldValue) {
            var current = props.oldValue;
            let points = document.getElementById(`${props.id}-pts`);
            const timer = setInterval(async () => {
                current += 1;
                points!.textContent = current.toString() + 'pt';
                if (current == props.newValue) {
                    clearInterval(timer);
                }
            }, 10);
        }
        
    }, [props.newValue]);

    return(
        <>
            <div id={`${props.id}-pts`}>{score}pt</div>
        </>
    )
}