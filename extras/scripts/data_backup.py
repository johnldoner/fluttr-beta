"""
The purpose of this module is to create a backup of the ideas node
"""
from firebase import firebase
from datetime import datetime,timedelta,time,date
import time
import dateutil.parser

class FirebaseBackup(object):

	def list_to_firedict(self,lst):
		if type(lst) is list:
				DictFromList = {}
				for i in range(len(lst)):
					try:
						DictFromList['-' + str(lst[i]['id'])] = lst[i]
					except:
						print 'No id or key error. Unique id is now just a number: ',str(i) + 'p'
						DictFromList['-' + str(i) + 'p'] = lst[i]
				return DictFromList
		else:
			return lst


	def firebase_auth(self,URL,auth=None):
		if auth is None:
			Firebase = firebase.FirebaseApplication(URL, None)
		else:
			authentication = firebase.FirebaseAuthentication(auth, 'cruzc09@gmail.com', 'fbpw')
			Firebase = firebase.FirebaseApplication(URL, authentication)	

		return Firebase

	def firebase_query(self,
		database,
		snapshot,
		Token=None,
		snapshotID=None):
		print 'pulling from ',database,'/',snapshot
		URL = 'https://%(database)s.firebaseio.com'% {'database':database}

		Firebase = self.firebase_auth(URL,auth=Token)
		
		if snapshot != None:
			snapshot = '/' + snapshot
		else:
			snapshot = '/'

		result = Firebase.get(snapshot, snapshotID)
		return result	

	def firebase_put(self,
			Dict,
			database,
			snapshot,
			Token=None,
			):
		'''
		Overwrites in the snapshot.
		Rules: Dictionary keys cannot have dots in them like that {'124773.278378':'content'} wont work!
		'''
		print 'putting to ',database,'/',snapshot
		URL = 'https://%(database)s.firebaseio.com'%{'database':database}
		#https://sfdcquery.firebaseio.com
		Firebase = self.firebase_auth(URL,auth=Token)

		Dict = self.list_to_firedict(Dict)

		if snapshot != None:
			snapshot = '/' + snapshot + '/'
		else:
			snapshot = '/'

			result = Firebase.put(URL,snapshot,Dict)
			return result

		result = Firebase.put(URL,snapshot,Dict)
		return result

def main():
	val = datetime.utcnow() - timedelta(hours=4)
	val = str(int(time.mktime(val.timetuple())))

	l = FirebaseBackup().firebase_query('resplendent-fire-1812','ideas')
	FirebaseBackup().firebase_put(l,'resplendent-fire-1812','backup/ideas/'+val)



if __name__ == "__main__": main()
