export default (str: string) => {
  return str.replace(/(<([^>]+)>)/gi, '')
}
