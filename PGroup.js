class PGroup {
	constructor(array){
		this.values = array;
	}

	static empty = new PGroup([]);

	add(value){
		if(this.values.indexOf(value) == -1) return new PGroup(this.values.concat([value]));
	}

	delete(value){
		//	soleved without the hint
	//	if(this.values.indexOf(value) != -1) return new PGroup(this.values.slice(0, this.values.indexOf(value)).concat(this.values.slice(this.values.indexOf(value) + 1)));
		//	solved with the hint
		return new PGroup(this.values.filter(v => v !== value));
	}

	has(value){
		return this.values.indexOf(value) != -1 ? true : false;
	}
}

