import HeaderTextBox from "@/components/ui/HeaderTextBox";
import React, { useState } from "react";
import { Button, View, Alert, ActivityIndicator } from "react-native";
import HomeEvalueateStyles from "./HomeEvaluate.style";
import InputCustom from "@/components/ui/Input";
import FormGroup from "@/components/ui/FormGroup";

/**
 * HomeEvaluate
 * @description The HomeEvaluate component displays a form for users to leave a review about English GO
 * @returns {JSX.Element} The HomeEvaluate component
 */
const HomeEvaluate = () => {
	var evaluateRef: string | undefined = undefined; // Ref to store the evaluation text
	const [isLoading, setIsLoading] = useState(false);

	/**
	 * handleSendEvaluate
	 * @description This function handles the submission of the evaluation form
	 * Validates the input and shows appropriate feedback to the user
	 */
	const handleSendEvaluate = () => {
		const evaluateText = evaluateRef;

		// Validate input
		if (!evaluateText || evaluateText.trim() === "") {
			Alert.alert("Thông báo", "Vui lòng nhập đánh giá của bạn trước khi gửi.", [
				{ text: "Đồng ý" },
			]);
			return;
		}

		// Set loading state
		setIsLoading(true);

		// Simulate API call
		console.log("Đánh giá:", evaluateText);

		// In a real app, you would send to an API
		setTimeout(() => {
			setIsLoading(false);
			Alert.alert(
				"Thành công",
				"Cảm ơn bạn đã gửi đánh giá về English GO!",
				[{ text: "Đồng ý" }]
			);
		}, 1000);
	};

	return (
		<View style={HomeEvalueateStyles.container}>
			{/* HeaderTextBox renders a title and description text  */}
			<HeaderTextBox
				titleText={"Đánh giá về English GO"}
				descriptionText={
					"Bạn có hài lòng khi sử dụng ứng dụng của chúng tôi? \n Hãy để lại đánh giá của bạn về English GO nhé!"
				}
			/>
			{/* The form box contains a form group with a label and an input field */}
			<View style={HomeEvalueateStyles.formBox}>
				{/* NHIỆM VỤ 3: Tạo form đánh giá */}
				<FormGroup label="Đánh giá của bạn">
					{/* InputCustom renders a text input field */}
					<InputCustom
						placeholder="Nhập đánh giá của bạn"
						style={{ height: 100 }} // set the height of the input field to 100
						onChangeText={(value) => (evaluateRef = value)}
						multiline={true}
						numberOfLines={4}
					/>
					<Button
						title={isLoading ? "Đang gửi..." : "Gửi đánh giá"}
						onPress={handleSendEvaluate}
						disabled={isLoading}
					/>
				</FormGroup>
			</View>
		</View>
	);
};

export default HomeEvaluate;
