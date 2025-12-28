import { useState } from 'react';
import referenceImage from '../assets/4e755b9d2d77483a9dc5afae177d133c27b36c98.png';
import { SectionHeader } from './components/SectionHeader';
import { ClinicalScenario } from './components/ClinicalScenario';
import { ActiveRecallCard } from './components/ActiveRecallCard';

interface Answers {
  [key: string]: string;
}

export default function App() {
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded-full text-sm">
            Clinical Anatomy Worksheet
          </div>
          <h1 className="mb-3">Clavicle, Sternum & Shoulder Girdle</h1>
          <p className="text-lg text-muted-foreground mb-2">
            Why These Landmarks Matter in Hospital Practice
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Medical students don't just need to know where the bone is; they need to know why it matters in a hospital.
          </p>
        </div>

        {/* Reference Image */}
        <div className="mb-10 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="mb-4 text-center">Reference Anatomy</h3>
          <img 
            src={referenceImage} 
            alt="Anatomical diagram showing clavicle, sternum and shoulder girdle" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* SECTION 1: Sternal Angle (Angle of Louis) */}
        <div className="mb-12">
          <SectionHeader
            number={1}
            title="The Sternal Angle (Angle of Louis)"
            subtitle="The Junction Between Manubrium and Body of Sternum"
            focus="This is a 'landmark' feature often tested in physical exams and critical for cardiac auscultation."
          />

          <div className="space-y-6">
            {/* Clinical Scenario 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="A physician is performing a physical exam and needs to locate the 2nd intercostal space to listen to the aortic valve. The patient is lying supine on the exam table."
                question="Which bony landmark should the physician palpate first to accurately locate the 2nd intercostal space?"
                answer="The Sternal Angle (Angle of Louis)"
                explanation="The sternal angle marks the articulation of the 2nd rib with the sternum. Once located, the physician can count intercostal spaces from this reference point. The 2nd intercostal space is immediately lateral to this landmark."
                userAnswer={answers.q1}
                onAnswerChange={(answer) => handleAnswerChange('q1', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>

            {/* Active Recall Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <ActiveRecallCard
                question="At what vertebral level does the Sternal Angle correspond to?"
                answer="T4–T5 intervertebral disc. This is also the level where the trachea bifurcates into the left and right main bronchi."
                hint="Think about thoracic vertebrae in the mid-chest"
              />
              <ActiveRecallCard
                question="Name three anatomical structures that occur at the level of the Sternal Angle."
                answer="1) 2nd rib articulation, 2) Bifurcation of the trachea, 3) Division between superior and inferior mediastinum, 4) Aortic arch begins and ends"
                hint="Think about respiratory, cardiovascular, and anatomical divisions"
              />
            </div>

            {/* Clinical Scenario 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="During a cardiology rotation, you observe that the sternal angle is being used as a reference point for multiple purposes beyond just counting ribs."
                question="Why is the sternal angle clinically significant beyond serving as a landmark for the 2nd rib?"
                answer="It marks the boundary between the superior and inferior mediastinum and is at the level of several important structures: tracheal bifurcation, aortic arch, and T4-T5 vertebral level"
                explanation="This makes it invaluable for interpreting chest X-rays, understanding mediastinal anatomy, and planning surgical approaches."
                userAnswer={answers.q2}
                onAnswerChange={(answer) => handleAnswerChange('q2', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: Clavicle Fractures */}
        <div className="mb-12">
          <SectionHeader
            number={2}
            title="Clavicle Fractures"
            subtitle="Understanding the S-Curve and Clinical Implications"
            focus="The clavicle is the most commonly fractured bone in the body - knowing its anatomy predicts injury patterns."
          />

          <div className="space-y-6">
            {/* Clinical Scenario 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="A 19-year-old rugby player presents to the emergency department after falling on an outstretched hand (FOOSH injury). He has pain and swelling over his shoulder area with visible deformity."
                question="Which part of the clavicle is most susceptible to fracture during a FOOSH injury, and why?"
                answer="The junction of the medial 2/3 and lateral 1/3 of the clavicle"
                explanation="This is the weakest point where the curvature changes from the medial convex curve to the lateral concave curve. Approximately 80% of clavicle fractures occur at this location due to biomechanical forces and the lack of ligamentous support at this transition point."
                userAnswer={answers.q3}
                onAnswerChange={(answer) => handleAnswerChange('q3', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>

            {/* Active Recall Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <ActiveRecallCard
                question="Why is the clavicle described as a 'strut' in the shoulder girdle?"
                answer="It holds the upper limb away from the trunk to allow for maximum range of motion. It acts as a mechanical strut connecting the axial skeleton to the appendicular skeleton."
                hint="Think about its functional role in shoulder movement"
              />
              <ActiveRecallCard
                question="What is the typical displacement pattern seen in a middle-third clavicle fracture?"
                answer="The medial fragment is pulled superiorly by the sternocleidomastoid muscle, while the lateral fragment is pulled inferiorly by the weight of the arm and pectoralis major muscle."
                hint="Consider muscle attachments and gravity"
              />
            </div>

            {/* Clinical Scenario 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="You're examining a patient with a suspected clavicle fracture. On palpation, you notice the lateral fragment seems to be displaced downward."
                question="Which muscles are responsible for the typical displacement pattern in clavicle fractures?"
                answer="Sternocleidomastoid (pulls medial fragment superiorly) and Pectoralis major/gravity (pulls lateral fragment inferiorly and medially)"
                explanation="Understanding muscle attachments helps predict fracture displacement, guide reduction techniques, and explain why some fractures require surgical fixation."
                userAnswer={answers.q4}
                onAnswerChange={(answer) => handleAnswerChange('q4', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>

            {/* Active Recall Card */}
            <ActiveRecallCard
              question="What important neurovascular structures lie directly beneath the clavicle, making fractures potentially dangerous?"
              answer="The subclavian artery and vein, and the brachial plexus. Fracture fragments can potentially injure these structures, though it's rare. This is why neurovascular assessment is critical in clavicle fractures."
              hint="Think about what passes between the clavicle and first rib"
            />
          </div>
        </div>

        {/* SECTION 3: Jugular Notch & Sternum */}
        <div className="mb-12">
          <SectionHeader
            number={3}
            title="The Jugular Notch & Sternum"
            subtitle="Surface Anatomy and Emergency Procedures"
            focus="Critical for identifying midline structures and boundaries of the superior mediastinum."
          />

          <div className="space-y-6">
            {/* Clinical Scenario 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="In an emergency department, a patient with severe upper airway obstruction requires an emergency surgical airway. The physician needs to identify the correct anatomical landmarks before making an incision."
                question="Which notch serves as the superior boundary for identifying the midline of the neck in an emergency tracheotomy?"
                answer="The Jugular (Suprasternal) Notch"
                explanation="The jugular notch is easily palpable and serves as a critical landmark. In an emergency cricothyroidotomy or tracheotomy, it helps identify the midline and provides a reference point. The incision is typically made 1-2 cm above the sternal notch for a tracheotomy."
                userAnswer={answers.q5}
                onAnswerChange={(answer) => handleAnswerChange('q5', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>

            {/* Active Recall Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <ActiveRecallCard
                question="True or False: The Xiphoid process remains cartilaginous throughout an entire human life."
                answer="FALSE. The xiphoid process typically ossifies (turns to bone) around age 40, though timing varies. It may remain partially cartilaginous in some individuals."
                hint="Think about bone development over time"
              />
              <ActiveRecallCard
                question="During CPR, why is it important to avoid the xiphoid process when performing chest compressions?"
                answer="Applying force to the xiphoid process can cause it to fracture and potentially lacerate the liver, causing internal bleeding. Compressions should be on the lower half of the sternum, about 2 inches above the xiphoid."
                hint="Consider what organs lie beneath the xiphoid"
              />
            </div>

            {/* Clinical Scenario 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="A medical student is learning proper CPR technique on a mannequin. The instructor asks them to identify the correct hand placement for chest compressions."
                question="Where should the heel of the hand be placed in relation to the sternum and xiphoid process for effective CPR?"
                answer="On the lower half of the sternum, approximately 2 finger widths (4-5 cm) above the xiphoid process, in the center of the chest"
                explanation="This position allows effective compression of the heart between the sternum and spine while avoiding injury to the xiphoid process and underlying liver. Compressions should be 2-2.4 inches (5-6 cm) deep in adults."
                userAnswer={answers.q6}
                onAnswerChange={(answer) => handleAnswerChange('q6', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>

            {/* Active Recall Card */}
            <ActiveRecallCard
              question="What structures can be palpated through the jugular notch, and what clinical information can this provide?"
              answer="The trachea can be palpated through the jugular notch. Deviation of the trachea from midline can indicate pneumothorax, pleural effusion, or mediastinal masses. The brachiocephalic artery may also be palpable in thin individuals."
              hint="Think about what lies directly behind this notch"
            />
          </div>
        </div>

        {/* SECTION 4: Acromioclavicular (AC) Joint */}
        <div className="mb-12">
          <SectionHeader
            number={4}
            title="Acromioclavicular (AC) Joint"
            subtitle="Shoulder Separations and Athletic Injuries"
            focus="AC joint injuries are among the most common shoulder injuries in contact sports and falls."
          />

          <div className="space-y-6">
            {/* Clinical Scenario 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="A 24-year-old hockey player is checked into the boards and falls directly onto the point of his shoulder. He presents with a visible 'step-off' deformity at the superior aspect of the shoulder where the distal clavicle appears elevated."
                question="What injury has occurred, and which ligaments are damaged in this type of injury?"
                answer="AC joint separation (likely Type III or higher). The acromioclavicular ligament and coracoclavicular ligaments (trapezoid and conoid) are torn"
                explanation="AC separations are graded I-VI. Type III involves complete disruption of both AC and CC ligaments, causing the characteristic step-off deformity as the clavicle is no longer anchored to the scapula and appears elevated."
                userAnswer={answers.q7}
                onAnswerChange={(answer) => handleAnswerChange('q7', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>

            {/* Active Recall Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <ActiveRecallCard
                question="What are the two components of the coracoclavicular ligament, and why are they clinically important?"
                answer="The Trapezoid (lateral) and Conoid (medial) ligaments. They provide vertical stability to the AC joint. Complete disruption of both ligaments indicates a Type III or higher AC separation and may require surgical repair."
                hint="Think about ligaments connecting the clavicle to the coracoid process"
              />
              <ActiveRecallCard
                question="How can you clinically differentiate between an AC joint separation and a clavicle fracture?"
                answer="AC separation shows tenderness and deformity specifically at the AC joint with a step-off deformity. Clavicle fracture shows tenderness along the shaft with possible tenting of skin. X-rays confirm the diagnosis."
                hint="Consider the location of pain and deformity"
              />
            </div>

            {/* Clinical Scenario 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="During a physical examination of an athlete with shoulder pain, you ask the patient to adduct their arm across their body (cross-body adduction test). This reproduces their pain."
                question="Which joint is this test assessing, and what does a positive test indicate?"
                answer="The AC joint. A positive cross-body adduction test (pain with adduction across the chest) indicates AC joint pathology such as AC arthritis or AC joint separation"
                explanation="This test compresses the AC joint. It's one of the most specific tests for AC joint pathology and is routinely used in shoulder examinations."
                userAnswer={answers.q8}
                onAnswerChange={(answer) => handleAnswerChange('q8', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>
          </div>
        </div>

        {/* SECTION 5: Sternoclavicular (SC) Joint */}
        <div className="mb-12">
          <SectionHeader
            number={5}
            title="Sternoclavicular (SC) Joint"
            subtitle="The Only Bony Connection of Upper Limb to Axial Skeleton"
            focus="SC joint dislocations are rare but potentially life-threatening due to proximity to mediastinal structures."
          />

          <div className="space-y-6">
            {/* Clinical Scenario 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="A patient involved in a head-on motor vehicle collision presents with anterior chest trauma, asymmetry at the base of the neck, and difficulty swallowing. The medial end of the clavicle appears prominent posteriorly."
                question="What is the most concerning diagnosis, and why is this a medical emergency?"
                answer="Posterior sternoclavicular joint dislocation"
                explanation="Posterior SC dislocations can compress vital mediastinal structures including the trachea, esophagus, great vessels (brachiocephalic vein, carotid artery), and nerves. This can cause dysphagia, dyspnea, vascular compromise, or even death. It requires urgent reduction, often in the operating room."
                userAnswer={answers.q9}
                onAnswerChange={(answer) => handleAnswerChange('q9', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>

            {/* Active Recall Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <ActiveRecallCard
                question="What type of joint is the sternoclavicular joint?"
                answer="Saddle-type synovial joint (though it functions more like a ball-and-socket due to its range of motion). It's the only bony articulation between the upper limb and the axial skeleton."
                hint="Think about joint classifications"
              />
              <ActiveRecallCard
                question="Which ligament stabilizes the SC joint by connecting the clavicle to the first rib?"
                answer="The costoclavicular ligament (also called the rhomboid ligament). It provides strong inferior support and limits excessive elevation of the medial clavicle."
                hint="'Costo' refers to rib, 'clavicular' refers to clavicle"
              />
            </div>

            {/* Clinical Scenario 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <ClinicalScenario
                scenario="You're reviewing a CT scan of the chest for a patient with suspected SC joint injury. The radiologist mentions that SC joint injuries are often missed on plain X-rays."
                question="Why are SC joint injuries difficult to visualize on standard chest X-rays, and what imaging is preferred?"
                answer="CT scan with 3D reconstruction"
                explanation="The SC joint is difficult to visualize on plain X-rays due to overlapping structures (ribs, spine, mediastinum). CT provides excellent bony detail and can also assess for mediastinal complications. Special X-ray views (serendipity view) can be attempted but CT is the gold standard."
                userAnswer={answers.q10}
                onAnswerChange={(answer) => handleAnswerChange('q10', answer)}
                showAnswer={showResults}
                disabled={showResults}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mb-10">
          {!showResults ? (
            <button
              onClick={handleSubmit}
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Check My Answers
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-10 py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Practice Again
            </button>
          )}
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-6 mb-8 shadow-md">
          <h3 className="mb-4 text-green-900">🎯 Key Clinical Takeaways</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-green-800 mb-2">
                <strong>Sternal Angle:</strong> Your reference point for counting ribs and identifying cardiac landmarks.
              </p>
              <p className="text-green-800 mb-2">
                <strong>Clavicle:</strong> Most commonly fractured bone - know the anatomy to predict complications.
              </p>
              <p className="text-green-800">
                <strong>Jugular Notch:</strong> Critical for emergency airway procedures and assessing JVP.
              </p>
            </div>
            <div>
              <p className="text-green-800 mb-2">
                <strong>AC Joint:</strong> Common in sports - learn to grade separations clinically.
              </p>
              <p className="text-green-800 mb-2">
                <strong>SC Joint:</strong> Rare injury but potentially life-threatening - always consider mediastinal structures.
              </p>
              <p className="text-green-800">
                <strong>CPR Position:</strong> Lower sternum, avoid xiphoid to prevent liver injury.
              </p>
            </div>
          </div>
        </div>

        {/* Study Strategy */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md">
          <h3 className="mb-4">📚 How to Use This Worksheet</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <p>
              <strong>1. Active Recall First:</strong> Click the blue active recall cards to test yourself before checking answers. This strengthens memory formation.
            </p>
            <p>
              <strong>2. Clinical Context:</strong> Read each clinical scenario carefully. Medicine is about pattern recognition - these scenarios mimic real patient presentations.
            </p>
            <p>
              <strong>3. Spaced Repetition:</strong> Come back to this worksheet multiple times over several days. Review incorrect answers especially.
            </p>
            <p>
              <strong>4. Physical Examination:</strong> Find these landmarks on yourself or a study partner. Palpate the jugular notch, sternal angle, and clavicle.
            </p>
            <p>
              <strong>5. Imaging Review:</strong> After completing this worksheet, review X-rays and CT scans showing these structures and their injuries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
