
(function(){
	
	angular.module('app')
	.service('itensService', [function(){
		var itens = 
		[
			{'item': 1, 'descricao': 'Informação em processo administrativo ou outros expedientes', 'valor': 2, 'pontosDia': false},
			{'item': 2, 'descricao': 'Informação fiscal de Consulta', 'valor': 4, 'pontosDia': false},
			{'item': 3, 'descricao': 'Informação fiscal em ouvidorias, chamados e denúncias', 'valor': 4, 'pontosDia': false},
			{'item': 4, 'descricao': 'Lavratura de Termo de Orientação', 'valor': 3, 'pontosDia': false},
			{'item': 5, 'descricao': 'Lavratura de Termo de Notificação', 'valor': 3, 'pontosDia': false},
			{'item': 6, 'descricao': 'Lavratura de Intimação', 'valor': 3, 'pontosDia': false},
			{'item': 7, 'descricao': 'Lavratura de Auto de Apreensão', 'valor': 6, 'pontosDia': false},
			{'item': 8, 'descricao': 'Afixação de Edital', 'valor': 8, 'pontosDia': false},
			{'item': 9, 'descricao': 'Plantão fiscal externo diurno de iniciativa do titular do órgão  de  lotação  do  Agente  de  Inspeção  de  Controle Urbano', 'valor': 20, 'pontosDia': true},
			{'item': 10, 'descricao': 'Plantão fiscal externo noturno de iniciativa do titular do órgão de lotação do Agente de Inspeção de Controle Urbano', 'valor': 40, 'pontosDia': true},
			{'item': 11, 'descricao': 'Plantão fiscal externo, em feriados ou escala especial, de iniciativa do titular do órgão de lotação do Agente de Inspeção de Controle Urbano', 'valor': 50, 'pontosDia': true},
			{'item': 12, 'descricao': 'Plantão interno diurno', 'valor': 20, 'pontosDia': true},
			{'item': 13, 'descricao': 'Plantão interno noturno', 'valor': 40, 'pontosDia': true},
			{'item': 14, 'descricao': 'Plantão interno, em feriados ou escala especial, de iniciativa  do  titular  do  órgão  de  lotação  do  Agente  de Inspeção de Controle Urbano', 'valor': 50, 'pontosDia': true},
			{'item': 15, 'descricao': 'Fiscalização dirigida ou especial, diurna, por ordem expressa do superior hierárquico', 'valor': 15, 'pontosDia': true},
			{'item': 16, 'descricao': 'Fiscalização  dirigida  ou  especial,  noturna,  por  ordem expressa do superior hierárquico', 'valor': 30, 'pontosDia': true},
			{'item': 17, 'descricao': 'Fiscalização  dirigida  ou  especial,  em  feriados,  por ordem expressa do superior hierárquico', 'valor': 40, 'pontosDia': true},
			{'item': 18, 'descricao': 'Participação na elaboração de projetos', 'valor': 20, 'pontosDia': true},
			{'item': 19, 'descricao': 'Designação do agente para tarefa eventual em outros órgãos da Administração Municipa', 'valor': 20, 'pontosDia': true},
			{'item': 20, 'descricao': 'Participação do agente em grupos de trabalho, comissões, reuniões, ..., com dedicação exclusiva', 'valor': 20, 'pontosDia': true},
			{'item': 21, 'descricao': 'Viagens de serviço no país ou no exterior', 'valor': 20, 'pontosDia': true},
			{'item': 22, 'descricao': 'Atuar em um dos seguintes setores ou atividades', 'valor': 10, 'pontosDia': true}			
		]


		 return {
		 	'itens': itens
		 }
	}]);

})();