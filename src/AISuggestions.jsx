import React, { useState, useEffect } from "react";

const suggestions = [
  {
    title: "💧 Stay Hydrated",
    advice: "Drink 2–3 liters of water daily for optimal body function.",
  },
  {
    title: "🌞 Morning Sunlight",
    advice:
      "Step outside for 10 minutes of sunlight to help regulate your circadian rhythm.",
  },
  {
    title: "🏃‍♀️ Walk Breaks",
    advice: "Take a 5-minute walk every hour to improve circulation.",
  },
  {
    title: "📵 Digital Detox",
    advice: "Unplug for 30 minutes daily to give your brain a screen break.",
  },
  {
    title: "😴 Sleep Schedule",
    advice:
      "Stick to a consistent bedtime—even on weekends—to improve sleep quality.",
  },
  {
    title: "🍏 Snack Smart",
    advice:
      "Keep healthy snacks like fruit or nuts nearby instead of processed foods.",
  },
  {
    title: "🧘 Breathe Deeply",
    advice:
      "Take three slow, deep breaths when stressed. It helps reset your nervous system.",
  },
  {
    title: "🪥 Oral Health",
    advice:
      "Brush and floss twice a day to maintain gum health and prevent disease.",
  },
  {
    title: "☕ Caffeine Cutoff",
    advice: "Avoid caffeine after 2 p.m. to help ensure better sleep.",
  },
  {
    title: "📚 Learn Daily",
    advice: "Read an article or chapter a day to sharpen your mind.",
  },
  {
    title: "🌬️ Open a Window",
    advice:
      "Fresh air improves mental alertness and clears out indoor pollutants.",
  },
  {
    title: "🛏️ Make Your Bed",
    advice: "Starting your day with a win sets a productive tone.",
  },
  {
    title: "🏋️‍♂️ Strength Training",
    advice:
      "Incorporate bodyweight exercises twice a week to build resilience.",
  },
  {
    title: "🧴 SPF Habit",
    advice: "Use sunscreen daily—even on cloudy days—to protect your skin.",
  },
  {
    title: "💤 Power Nap",
    advice: "A 20-minute nap boosts alertness without sleep inertia.",
  },
  {
    title: "🫐 Eat Antioxidants",
    advice:
      "Include berries or greens to fight inflammation and oxidative stress.",
  },
  {
    title: "🛁 End-of-Day Ritual",
    advice: "A warm bath or tea helps signal it's time to wind down.",
  },
  {
    title: "📿 Journal 3 Things",
    advice: "List three things you're grateful for to shift your mindset.",
  },
  {
    title: "🥤 Skip Sugary Drinks",
    advice: "Replace sodas with infused water or herbal teas.",
  },
  {
    title: "📴 No-Scroll Zone",
    advice: "Ban phone use from your bedroom to improve sleep.",
  },
  {
    title: "🌿 Houseplants Help",
    advice: "Indoor plants can improve air quality and boost mood.",
  },
  {
    title: "💪 Micro-Workouts",
    advice: "Try 5-minute bursts of movement throughout your day.",
  },
  {
    title: "🧠 Learn a Skill",
    advice: "Dabbling in a new hobby stimulates mental agility.",
  },
  {
    title: "🚰 Hydration Alarm",
    advice: "Set reminders to drink water throughout the day.",
  },
  {
    title: "👟 Dress for Activity",
    advice: "Wearing comfy clothes can encourage spontaneous movement.",
  },
  {
    title: "🥕 Meal Prep Sunday",
    advice: "Planning meals ahead keeps you nourished and less stressed.",
  },
  {
    title: "🕯️ Reduce Light at Night",
    advice: "Dim lights in the evening to signal melatonin production.",
  },
  {
    title: "🎧 Favorite Song Break",
    advice: "Listening to music you love boosts dopamine and energy.",
  },
  {
    title: "👂 Practice Listening",
    advice: "Listen without interrupting—it sharpens empathy and patience.",
  },
  {
    title: "🪑 Move Your Seat",
    advice: "Stand up and change locations every 45 minutes to refresh focus.",
  },
  {
    title: "🎨 Create Something",
    advice: "Doodle, build, or craft—it’s therapeutic and joyful.",
  },
  {
    title: "🧠 Brain Puzzle",
    advice: "Try a crossword or Sudoku for a cognitive boost.",
  },
  {
    title: "😄 Smile More",
    advice: "The act of smiling can actually lower stress hormones.",
  },
  {
    title: "🧂 Check Sodium",
    advice: "Keep salt under 2,300 mg/day to protect your heart.",
  },
  {
    title: "🩺 Know Your Numbers",
    advice: "Stay updated on BP, cholesterol, and glucose levels.",
  },
  {
    title: "🧴 Sanitize Smartly",
    advice: "Clean your phone and keyboard weekly—they harbor bacteria.",
  },
  {
    title: "🪮 Scalp Massage",
    advice: "Massaging your scalp boosts circulation and eases tension.",
  },
  {
    title: "🧺 Tidy Something",
    advice: "Even a small cleanup can spark mental clarity.",
  },
  {
    title: "🧣 Layer Mindfully",
    advice: "Dress in layers to adapt comfortably to changing temps.",
  },
  {
    title: "🚶‍♂️ Walk & Talk",
    advice: "Take calls while walking to sneak in steps.",
  },
  {
    title: "☀️ Early Light Exposure",
    advice: "Daylight within 30 minutes of waking aligns your body clock.",
  },
  {
    title: "🚿 Shower Meditation",
    advice: "Use your shower time to pause, breathe, and re-center.",
  },
  {
    title: "🍽️ Eat Without Screens",
    advice: "Mindful eating improves digestion and fullness signals.",
  },
  {
    title: "🎈 Posture Reset",
    advice: "Straighten your back and roll your shoulders once an hour.",
  },
  {
    title: "🧡 Send a Thank You",
    advice: "Gratitude boosts emotional wellness—for you and them.",
  },
  {
    title: "🚫 Skip Multitasking",
    advice: "Single-tasking increases focus and reduces overwhelm.",
  },
  {
    title: "📱 App Cleanup",
    advice: "Remove one app you don’t need—declutter your attention.",
  },
  {
    title: "🍲 Try a New Recipe",
    advice: "Cooking something new keeps meals exciting and nutritious.",
  },
  {
    title: "🧵 Fix One Thing",
    advice: "Mend, patch, or repair something—it feels deeply satisfying.",
  },
  {
    title: "🧹 Declutter Drawer",
    advice: "Organizing even one drawer lifts mental weight.",
  },
  {
    title: "🔁 Change Perspective",
    advice: "Sit on the floor or take a different route today.",
  },
  {
    title: "👀 20-20-20 Rule",
    advice: "Every 20 minutes, look 20 feet away for 20 seconds.",
  },
  {
    title: "🎒 Pack a Snack",
    advice: "Keep energy-steadying snacks on hand during your day.",
  },
  {
    title: "📷 Capture Beauty",
    advice: "Snap a photo of something small that brings you joy.",
  },
  {
    title: "🧦 Cozy Comfort",
    advice: "Comfortable clothing helps your body relax and feel safe.",
  },
  {
    title: "📖 One Page Rule",
    advice: "Just read one page—you may end up reading more.",
  },
  {
    title: "🌻 Look Up",
    advice: "Tilt your gaze to the horizon to ease neck strain and stress.",
  },
  {
    title: "🫂 3-Second Hug",
    advice: "Longer hugs stimulate oxytocin and reduce stress.",
  },
  {
    title: "🧊 Cool Rinse",
    advice: "A 15-second cold splash can boost alertness post-shower.",
  },
  {
    title: "🕯️ Aromatherapy",
    advice: "Try lavender or peppermint oil to relax or energize.",
  },
  {
    title: "🍠 Root Veggies",
    advice: "Sweet potatoes and carrots ground and fuel the body well.",
  },
  {
    title: "📋 To-Done List",
    advice: "Write down what you completed—it boosts morale.",
  },
  {
    title: "🤲 Hand Stretch",
    advice: "Stretch your fingers and wrists if you type all day.",
  },
  {
    title: "🔄 Switch Hands",
    advice: "Try brushing teeth or opening doors with your non-dominant hand.",
  },
  {
    title: "🌻 Say One Nice Thing",
    advice: "Kind words ripple outward. Try offering one freely.",
  },
  {
    title: "📅 Plan Something Fun",
    advice: "Even a tiny plan can bring purpose to your week.",
  },
  {
    title: "🎯 Prioritize One Task",
    advice: "Pick one top task and give it focused time.",
  },
  {
    title: "🛑 Pause Notifications",
    advice: "Mute non-urgent pings for an hour of deep focus.",
  },
  {
    title: "🗣️ Positive Self-Talk",
    advice: "Replace ‘I have to’ with ‘I choose to.’ It shifts your mindset.",
  },
  {
    title: "🌬️ Box Breathing",
    advice: "Inhale 4, hold 4, exhale 4, hold 4. Repeat.",
  },
  {
    title: "🎒 Prep the Night Before",
    advice: "Laying things out ahead saves mental energy in the morning.",
  },
  {
    title: "📎 Paperless Tip",
    advice: "Digitize one thing today—receipts, notes, lists.",
  },
];

const AISuggestions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % suggestions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const tip = suggestions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto px-14">
      <div className="border-l-4 border-green-500 bg-green-100 p-6 rounded-lg shadow-lg transition-all duration-500">
        <h2 className="text-2xl font-semibold text-green-800 mb-2">
          ✨ AI Wellness Tip: {tip.title}
        </h2>
        <p className="text-gray-700 text-base">{tip.advice}</p>
      </div>
    </div>
  );
};

export default AISuggestions;
