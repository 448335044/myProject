import message from "./message/index";
import popup from "./popup/index";

export default {
    install(vue) {
        vue.prototype.$message = message
        vue.prototype.$popup = popup
    }
}

