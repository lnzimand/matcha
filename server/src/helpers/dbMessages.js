import { pool } from "./poolConnection"
import query from "./query"

class Messages {
    constructor(){
        this.connection = pool
        this.query = query
    }

    connectDb()
}