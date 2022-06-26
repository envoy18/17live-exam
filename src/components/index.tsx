import { useCallback, useEffect, useState } from "react"
import { listData } from "./data";
import { Avatar, Container, List, ListItem } from "./styled-component";
import { Points } from "./point";


export function Main() {
    const [list, setList] = useState(listData);

    const sortList = useCallback(() => {
        const index = Math.floor(Math.random() * 10);
        var newList = [...list];
        newList[index].oldScore = newList[index].score
        newList[index].score = newList[index].score + Math.floor(Math.random() * 100);
        const sorted = newList.sort((a, b) => { return b.score - a.score});
        sorted.map((item, index) => {
            item.currentPos = item.newPos;
            item.newPos = index * 60;
        });
        setList(sorted);
    }, [list]);

    useEffect(() => {
        setTimeout(() => {
            sortList();
        }, 1000);
    }, [list]);

    return(
        <>
            <Container>
                <List>
                    {list.map((item, index) => {
                        return(
                            <ListItem id={item.userID} currentPos={item.currentPos} newPos={item.newPos}>
                                <div>
                                    {index + 1}
                                </div>
                                <Avatar src={item.picture} alt=''/>
                                <div>
                                    {item.displayName} 
                                </div>
                                <div style={{ flexGrow: '1', width: '10%', textAlign: 'right' }} >
                                    <Points newValue={item.score} oldValue={item.oldScore} id={item.userID}/>
                                </div>
                            </ListItem>
                        )
                    })}
                </List>
            </Container>
            
            
        </>
    )
}