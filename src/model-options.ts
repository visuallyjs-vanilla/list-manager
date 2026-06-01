function notInSameGroup(source: any, target: any) {
    return source.group == null || target.group == null || source.group !== target.group
}

const modelOptions = {
    beforeConnect:(source: any, target: any) => {
        return notInSameGroup(source, target)
    }
}

export default modelOptions
