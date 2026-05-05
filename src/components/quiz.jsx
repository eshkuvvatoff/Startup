"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, Target, Sparkles, ChevronRight, ArrowLeft, BarChart3 } from "lucide-react"

const quizData = {
  mbti: {
    title: "16 Personalities",
    id: "mbti",
    questions: [
      { q: "Yangi g'oyalar sizni odamlar bilan muloqotdan ko'ra ko'proq ruhlantiradimi?", axis: "IE", v: "I" },
      { q: "Qaror qabul qilishda mantiq his-tuyg'ulardan har doim ustunmi?", axis: "TF", v: "T" },
      { q: "Atrofingizdagi tartibsizlik ish samaradorligingizga salbiy ta'sir qiladimi?", axis: "JP", v: "J" },
      { q: "Siz ko'proq kelajakdagi imkoniyatlar haqida o'ylaysizmi yoki hozirgi real faktlar?", axis: "SN", v: "N" },
      { q: "Notanish davrada birinchi bo'lib gap boshlash siz uchun osonmi?", axis: "IE", v: "E" },
      { q: "Rejadan tashqari kutilmagan o'zgarishlar sizni xursand qiladimi?", axis: "JP", v: "P" },
      { q: "Boshqalarning tanqidiga juda sezgir emasmisiz?", axis: "TF", v: "T" },
      { q: "Kitob yoki filmdagi ramziy ma'nolarni qidirishni yoqtirasizmi?", axis: "SN", v: "N" },
      { q: "Ishni yakunlash uchun oxirgi daqiqagacha kutish odatingiz bormi?", axis: "JP", v: "P" },
      { q: "Siz ko'proq 'amaliyotchi'misiz yoki 'nazariyotchi'?", axis: "SN", v: "S" }
    ]
  },
  future: {
    title: "Future & Mindset",
    id: "future",
    questions: [
      { q: "Siz uchun muvaffaqiyat — bu moliyaviy erkinlikmi yoki ichki xotirjamlik?", options: [{t: "Moliya", v: "wealth"}, {t: "Xotirjamlik", v: "peace"}] },
      { q: "O'z sohangizda dunyo darajasidagi ekspert bo'lishga tayyormisiz?", options: [{t: "Albatta", v: "yes"}, {t: "Shunchaki yaxshi mutaxassis bo'lsam yetarli", v: "no"}] },
      { q: "Tavakkal qilishdan ko'ra xavfsiz yo'lni tanlash ma'qulmi?", options: [{t: "Xavfsiz yo'l", v: "safe"}, {t: "Risk — bu imkoniyat", v: "risk"}] },
      { q: "Siz uchun vaqt — bu pulmi yoki tajribami?", options: [{t: "Pul", v: "money"}, {t: "Tajriba", v: "exp"}] },
      { q: "Yangi texnologiyalar (AI) insoniyatni qutqaradimi yoki yo'q qiladi?", options: [{t: "Qutqaradi", v: "save"}, {t: "Xavfli", v: "danger"}] }
    ]
  }
}

export default function LuxuryQuiz() {
  const [activeQuiz, setActiveQuiz] = useState(null)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [isFinished, setIsFinished] = useState(false)

  const currentQuiz = activeQuiz ? quizData[activeQuiz] : null
  const progress = currentQuiz ? ((step) / currentQuiz.questions.length) * 100 : 0

  const handleAnswer = (val) => {
    const updated = [...answers, val]
    setAnswers(updated)
    if (step < currentQuiz.questions.length - 1) {
      setStep(step + 1)
    } else {
      setIsFinished(true)
    }
  }

  if (!activeQuiz) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">ANALYSIS CENTER</h1>
          <p className="text-slate-400 max-w-md mx-auto">O'zligingizni anglash va kelajakni rejalashtirish uchun professional tahlilni tanlang.</p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl w-full">
          {Object.entries(quizData).map(([key, quiz]) => (
            <button 
              key={key}
              onClick={() => setActiveQuiz(key)}
              className="flex-1 min-w-[280px] group relative p-[1px] rounded-3xl overflow-hidden bg-white/10 hover:bg-gradient-to-br from-purple-500 to-blue-500 transition-all"
            >
              <div className="bg-[#020617] rounded-[23px] p-8 h-full flex flex-col items-start text-left transition-all group-hover:bg-[#020617]/80">
                <div className="mb-6 p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                  {key === 'mbti' ? <Brain className="w-6 h-6 text-purple-400" /> : <Target className="w-6 h-6 text-blue-400" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{quiz.title}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">Mukammal algoritm asosidagi test.</p>
                <div className="mt-auto flex items-center text-xs font-bold tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">
                  Start Analysis <ChevronRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto min-h-[70vh] flex flex-col">
      {/* Mini Header */}
      <div className="flex items-center justify-between mb-12 px-2">
        <button onClick={() => setActiveQuiz(null)} className="flex items-center text-slate-500 hover:text-white transition-colors text-sm font-medium">
          <ArrowLeft className="mr-2 w-4 h-4" /> Chiqish
        </button>
        <div className="flex items-center gap-4">
          <div className="h-1 w-32 bg-white/5 rounded-full overflow-hidden">
            <motion.div animate={{width: `${progress}%`}} className="h-full bg-purple-500" />
          </div>
          <span className="text-xs font-mono text-slate-500">{step + 1} / {currentQuiz.questions.length}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-2xl md:text-4xl font-medium text-white mb-12 max-w-2xl leading-tight px-4">
              {currentQuiz.questions[step].q}
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg px-4">
              {(currentQuiz.questions[step].options || [
                {t: "Ha, mutlaqo", v: currentQuiz.questions[step].v},
                {t: "Yo'q, unchalik emas", v: "alt"}
              ]).map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.v)}
                  className="flex-1 py-5 px-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 text-slate-200 font-medium transition-all active:scale-95"
                >
                  {opt.t}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center p-8">
            <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-purple-500" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Tahlil Tayyor</h2>
            <p className="text-slate-400 mb-8 max-w-sm mx-auto">Sizning natijalaringiz AI algoritmi orqali tekshirildi va profilga saqlandi.</p>
            <div className="flex gap-4 justify-center">
              <Button onClick={() => setActiveQuiz(null)} variant="outline" className="border-white/10 text-white">Menyuga qaytish</Button>
              <Button className="bg-purple-600 hover:bg-purple-700">Natijalarni ko'rish</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
