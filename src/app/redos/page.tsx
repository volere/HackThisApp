

const timeout = require('timeout-decorator');

const SECRET = "this_is_secret";




function search(r: RegExp, s: string): RegExpMatchArray | null {
    return s.match(new RegExp(r)); // Adjust regex library's function if it's different
}

const timeoutSearch = timeout(2000, search);


const regex = (data: Buffer) => {
    const r: string = data.toString().trim();
    try {
        timeoutSearch(r, SECRET)

        return 'Thanks!'
    }
    catch (err) {
        return err;

    }
}


export default async function Page() {


    return (
        <>
        </>
    )
}