export default {
	saveFormData: async () => {
		formJson.setText(appsmith.URL.fullPath + '\n' + JSON.stringify(JSONForm1.formData));
	}
}