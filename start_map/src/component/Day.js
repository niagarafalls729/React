import dummy from "../DB/data.json"

export default function Day(){
    const day = 2;
    const wordList = dummy.words.filter(word =>(word.day===day))

    return <>
    <table>
        <tbody>
            {wordList.map(words => (
            <tr id={words.id}>
                <td>
                    {words.eng}
                </td>
                <td>
                    {words.kor}
                </td>                
            </tr>
            ) ) }
        </tbody>
    </table>
    </>

}