export default <T>(input: null | undefined | T): input is T => input !== null && input !== undefined;
