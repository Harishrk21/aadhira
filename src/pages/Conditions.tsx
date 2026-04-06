import { useState } from 'react';
import { conditions } from '../data/conditionsData';
import { 
  Puzzle, 
  Zap, 
  BookOpen, 
  Activity, 
  Heart, 
  Brain,
  Search
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import CTASection from '../components/ui/CTASection';

// Map condition IDs to Lucide icons
const conditionIcons: Record<string, JSX.Element> = {
  'autism': <Puzzle className="w-6 h-6" />,
  'adhd': <Zap className="w-6 h-6" />,
  'learning-disabilities': <BookOpen className="w-6 h-6" />,
  'cerebral-palsy': <Activity className="w-6 h-6" />,
  'down-syndrome': <Heart className="w-6 h-6" />,
  'intellectual-developmental-disabilities': <Brain className="w-6 h-6" />,
};

const Conditions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCondition, setActiveCondition] = useState(conditions[0].id);
  
  const filteredConditions = conditions.filter(
    condition => 
      condition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      condition.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const selectedCondition = conditions.find(condition => condition.id === activeCondition) || conditions[0];
  
  return (
    <>
      <PageHeader
        title="Conditions We Treat"
        subtitle="Specialized therapy for a wide range of developmental needs"
        backgroundImage="https://images.pexels.com/photos/8942833/pexels-photo-8942833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        metaDescription="Aadhiraa Paediatric Therapy Services provides specialized treatment for conditions including Autism, ADHD, Learning Disabilities, Cerebral Palsy, Down Syndrome, and other developmental disorders."
      />
      
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Understanding Developmental Conditions"
            subtitle="Early diagnosis and intervention can make a significant difference in a child's development"
          />
          
          {/* Search Box */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search conditions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="w-5 h-5 text-neutral-500 absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
          
          {/* Condition Tabs */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 md:space-x-4 min-w-max">
              {filteredConditions.map((condition) => (
                <button
                  key={condition.id}
                  onClick={() => setActiveCondition(condition.id)}
                  className={`px-4 py-2 rounded-full flex items-center transition-colors ${
                    activeCondition === condition.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                  }`}
                >
                  <div className={activeCondition === condition.id ? 'text-white' : 'text-primary-600'}>
                    {conditionIcons[condition.id]}
                  </div>
                  <span className="ml-2 whitespace-nowrap">{condition.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
          
          {filteredConditions.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Selected Condition Details */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <img 
                    src={selectedCondition.image} 
                    alt={selectedCondition.title} 
                    className="w-full h-64 object-cover"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-100 rounded-lg mr-4">
                        {conditionIcons[selectedCondition.id]}
                      </div>
                      <h2 className="text-2xl font-bold">{selectedCondition.title}</h2>
                    </div>
                    
                    <p className="text-neutral-700 mb-6">
                      {selectedCondition.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary-700">Common Signs</h3>
                        <ul className="space-y-3">
                          {selectedCondition.signs.map((sign, index) => (
                            <li key={index} className="flex items-start">
                              <div className="text-primary-600 mt-1">
                                <div className="w-4 h-4 rounded-full bg-primary-200 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                                </div>
                              </div>
                              <span className="ml-3 text-neutral-700">{sign}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary-700">Our Approach</h3>
                        <ul className="space-y-3">
                          {selectedCondition.treatments.map((treatment, index) => (
                            <li key={index} className="flex items-start">
                              <div className="text-primary-600 mt-1">
                                <div className="w-4 h-4 rounded-full bg-primary-200 flex items-center justify-center">
                                  <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                                </div>
                              </div>
                              <span className="ml-3 text-neutral-700">{treatment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Other Conditions Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">All Conditions We Treat</h3>
                  
                  <div className="space-y-4">
                    {conditions.map((condition) => (
                      <button
                        key={condition.id}
                        onClick={() => setActiveCondition(condition.id)}
                        className={`w-full text-left p-4 rounded-lg transition-colors ${
                          activeCondition === condition.id
                            ? 'bg-primary-600 text-white'
                            : 'bg-white hover:bg-neutral-100'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`mr-3 ${activeCondition === condition.id ? 'text-white' : 'text-primary-600'}`}>
                            {conditionIcons[condition.id]}
                          </div>
                          <div>
                            <h4 className={`font-semibold ${activeCondition === condition.id ? 'text-white' : 'text-neutral-900'}`}>
                              {condition.title}
                            </h4>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-neutral-600">No conditions found matching your search.</p>
              <button 
                className="mt-4 text-primary-600 font-medium hover:text-primary-800"
                onClick={() => setSearchTerm('')}
              >
                Clear search and show all conditions
              </button>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-primary-50">
        <div className="container-custom">
          <SectionTitle
            title="Early Intervention is Key"
            subtitle="Why timely diagnosis and therapy matters for your child's development"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/5905720/pexels-photo-5905720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Early intervention therapy session" 
                className="rounded-xl shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">The Importance of Early Therapy</h3>
              <p className="text-lg text-neutral-700 mb-6">
                Research consistently shows that early intervention can significantly improve outcomes for children with developmental conditions. The brain's neuroplasticity—its ability to form new connections—is at its highest during early childhood, making this a critical window for therapeutic intervention.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary-700">Brain Development</h4>
                  <p className="text-neutral-600">
                    Early therapy takes advantage of the brain's natural plasticity during critical developmental periods.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary-700">Preventing Secondary Issues</h4>
                  <p className="text-neutral-600">
                    Early intervention can prevent or reduce additional challenges that may develop later.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary-700">Family Support</h4>
                  <p className="text-neutral-600">
                    Early therapy helps families learn effective strategies to support their child's development from the beginning.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="/book-appointment" className="btn-primary">
                  Schedule an Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Concerned About Your Child's Development?" 
        subtitle="Our team can help with assessment, diagnosis, and personalized therapy plans."
      />
    </>
  );
};

export default Conditions;