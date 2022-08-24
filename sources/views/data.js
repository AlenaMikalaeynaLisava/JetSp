import {JetView} from "webix-jet";
import {data} from "../models/base";



export default class DataView extends JetView{
	config(){
		return { id: "ssheet",
		view:"spreadsheet",};
	}
	init(view){
		view.parse(data);
	}
}