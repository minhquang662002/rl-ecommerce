String.prototype.replaceAt= (index, replacement)=> {
    return this.substring(0, index)+ replacement + this.substring(index + replacement.length)
}