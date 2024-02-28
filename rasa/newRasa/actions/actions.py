# from typing import Any, Text, Dict, List
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher
# import random

# class ActionSelectRandomLesson(Action):
#     def name(self) -> Text:
#         return "action_select_random_lesson"

#     def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#         category = tracker.get_slot("category")
#         algorithm = tracker.get_slot("algorithm")

#         if category == "search":
#             if algorithm == "linear":
#                 lesson_options = ["definition", "visual", "resources"]
#             elif algorithm == "binary":
#                 lesson_options = ["definition", "visual", "resources"]
#             elif algorithm == "bfs":
#                 lesson_options = ["definition", "visual", "resources"]
#             elif algorithm == "dfs":
#                 lesson_options = ["definition", "visual", "resources"]
#             else:
#                 lesson_options = []
#         elif category == "sort":
#             if algorithm == "merge":
#                 lesson_options = ["definition", "visual", "resources"]
#             elif algorithm == "quicksort":
#                 lesson_options = ["definition", "visual", "resources"]
#             elif algorithm == "heap":
#                 lesson_options = ["definition", "visual", "resources"]
#             elif algorithm == "bubble":
#                 lesson_options = ["definition", "visual", "resources"]
#             elif algorithm == "insertion":
#                 lesson_options = ["definition", "visual", "resources"]
#             else:
#                 lesson_options = []
#         else:
#             lesson_options = []

#         if lesson_options:
#             selected_lesson = random.choice(lesson_options)
#             dispatcher.utter_message(template=f"utter_algorithm_{algorithm.replace(' ', '_')}_{selected_lesson}")
#         else:
#             dispatcher.utter_message("Sorry, I couldn't find any lessons for the selected algorithm.")

#         return []
